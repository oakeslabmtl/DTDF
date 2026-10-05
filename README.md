# Digital Twin Description Framework (DTDF) Ontology

[![DOI](https://img.shields.io/badge/DOI-10.1109%2Fmodels--c68889.2025.00030-blue)](https://doi.org/10.1109/models-c68889.2025.00030)
[![arXiv](https://img.shields.io/badge/arXiv-2508.18431-b31b1b.svg)](https://arxiv.org/pdf/2508.18431)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

This work is based on [1], which aims to create a reporting framework for Digital Twins (DTs) from 21 characteristics. We build their ontology vocabulary and description in Onotlogy Modeling Language (OML) in [openCAESAR Rosetta](https://github.com/opencaesar/oml-rosetta). We provide the example of an incubator (also described in [1]) for the OML description.

We use our separately-developed tool called [DTInsight](https://github.com/oakeslabmtl/DTInsight) [2] to generate an interactive conceptual architecture visualization of the DT based on this ontology, called a *DT Constellation* [3].

We then generate a reporting page integrating the characteristics table and the conceptual architecture from a CI/CD pipeline. You can view it at https://oakeslabmtl.github.io/DTDF/.

## OML vocabulary and description location

The DTDF vocabulary can be found under `src/oml/bentleyjoakes.github.io/DTDF`, and the incubator DTDF description under `src/oml/bentleyjoakes.github.io/incubator`

## Running the project in a container

A ready-made [dev container](https://containers.dev/) bundles Java 21, Gradle, Apache Jena Fuseki and the [OML Luxor](https://github.com/opencaesar/oml-luxor) editor, so nothing needs to be installed besides Docker and an editor.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (on Windows, use the WSL 2 backend)
- [VS Code](https://code.visualstudio.com/) with the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
- [DTInsight](https://github.com/oakeslabmtl/DTInsight/releases/tag/stable) (Windows or Linux) to visualize the result
- Optional, to save time on a slow network: `docker pull ghcr.io/oakeslabmtl/dtdf-tutorial:1.1` (~600 MB)

### Open the project

- One click: [open in Dev Containers](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/oakeslabmtl/DTDF)
- Or clone the repository, open the folder in VS Code, and choose **Reopen in Container**

### Load the ontology into Fuseki

In a terminal inside the container, run these as two separate commands:

```bash
./gradlew startFuseki
./gradlew owlLoad
```

- Fuseki web UI: http://localhost:3030
- SPARQL endpoint: http://localhost:3030/DTDF/sparql
- In DTInsight, set the Fuseki endpoint to `http://localhost:3030/DTDF`, then click **Call Fuseki**

After editing the OML files under `src/oml`, run `./gradlew owlLoad` again and reload in DTInsight. To see an OML file as a diagram, right-click it and choose **Open in Diagram**.

### Troubleshooting

- **Port 3030 is already in use**: stop any other Fuseki server or dev container of this project first.
- **Fuseki seems stuck**: run `./gradlew stopFuseki`, then `./gradlew startFuseki`.
- **After updating the container configuration**: rebuild the container. In editors without a rebuild command, delete the old container in Docker Desktop and reopen the folder in the container.

## The 21 Reported Characteristics

- System under study
- Physical acting components
- Physical sensing components
- Physical-to-virtual interaction
- Virtual-to-physical interaction
- DT services
- Twinning time-scale
- Multiplicities
- Life-cycle stages
- DT models and data
- Tooling and enablers
- DT constellation
- Twinning process and DT evolution
- Fidelity and validity considerations
- DT technical connection
- DT hosting/deployment
- Insights and decision making
- Horizontal integration
- Data ownership and privacy
- Standardization
- Security and safety considerations

## References

[1] Gil S, Oakes BJ, Gomes C, Frasheri M, Larsen PG. Toward a systematic reporting framework for Digital Twins: a cooperative robotics case study. SIMULATION. 2024;101(3):313-339. doi:10.1177/00375497241261406

[2] Fiter, K., Malassigné-Onfroy, L., & Oakes, B. (2025, October). DTInsight: A tool for explicit, interactive, and continuous digital twin reporting. In 2025 ACM/IEEE 28th International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C) (pp. 139-143). IEEE.

[3] Oakes, B. J., Parsai, A., Van Mierlo, S., Demeyer, S., Denil, J., De Meulenaere, P. and Vangheluwe, H. (2021). Improving Digital Twin Experience Reports. In Proceedings of the 9th International Conference on Model-Driven Engineering and Software Development - MODELSWARD; ISBN 978-989-758-487-9; ISSN 2184-4348, SciTePress, pages 179-190. DOI: 10.5220/0010236101790190

## License

This project is licensed under the 
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).
