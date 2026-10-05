# Tutorial environment: Java 21, the OML Luxor extension, and pre-warmed Gradle/Fuseki caches
ARG BASE_IMAGE=eclipse-temurin:21-jdk-jammy
ARG USERNAME=vscode
ARG USER_UID=1000

# The caches are plain Java artifacts, so they are warmed once on the build machine's own
# architecture: under arm64 emulation Fuseki starts too slowly and startFuseki gives up.
FROM --platform=$BUILDPLATFORM ${BASE_IMAGE} AS warm
ARG USERNAME
ARG USER_UID
RUN useradd --uid $USER_UID --user-group --create-home --shell /bin/bash $USERNAME
USER $USERNAME
COPY --chown=$USERNAME:$USERNAME . /tmp/warm
# Run the whole pipeline once so ~/.gradle (wrapper, plugins, OML deps) and ~/.m2 (Fuseki jars,
# fetched by startFuseki at runtime) are filled. The Fuseki plugin always caches under user.home.
RUN cd /tmp/warm \
 && sed -i 's/\r$//' gradlew \
 && chmod +x gradlew \
 && ./gradlew --no-daemon startFuseki \
 && ./gradlew --no-daemon owlLoad \
 && ./gradlew --no-daemon stopFuseki \
 && rm -rf ~/.gradle/daemon

FROM ${BASE_IMAGE}
ARG USERNAME
ARG USER_UID
ARG LUXOR_VERSION=2.13.0

LABEL org.opencontainers.image.source="https://github.com/oakeslabmtl/DTDF" \
      org.opencontainers.image.description="DTDF tutorial: Java 21, OML Luxor, pre-warmed Gradle and Fuseki caches"

RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates curl git socat \
 && rm -rf /var/lib/apt/lists/* \
 && useradd --uid $USER_UID --user-group --create-home --shell /bin/bash $USERNAME

# Luxor is not on the VS Code Marketplace, so devcontainer.json installs it from this file.
# Its language server is launched with the `java` found on PATH, i.e. this image's Java 21.
RUN mkdir -p /opt/oml-luxor \
 && curl -fsSL -o /opt/oml-luxor/oml-luxor.vsix \
      "https://github.com/opencaesar/oml-luxor/releases/download/${LUXOR_VERSION}/oml-luxor-${LUXOR_VERSION}.vsix" \
 && chmod 644 /opt/oml-luxor/oml-luxor.vsix

COPY --from=warm --chown=$USERNAME:$USERNAME /home/$USERNAME/.gradle /home/$USERNAME/.gradle
COPY --from=warm --chown=$USERNAME:$USERNAME /home/$USERNAME/.m2 /home/$USERNAME/.m2

USER $USERNAME
