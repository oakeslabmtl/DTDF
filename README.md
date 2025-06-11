# Digital Twin Description Framework (DTDF) Ontology

This work is based on [1], which aims to create a reporting framework for Digital Twins (DTs) from 21 characteristics. We build their ontology vocabulary and description in Onotlogy Modeling Language (OML) in [openCAESAR Rosetta](https://github.com/opencaesar/oml-rosetta). We provide the example of an incubator (also described in [1]) for the OML description.

We use our separately-developed tool called [DTInsight](https://github.com/oakeslab-polymtl/DTInsight) to generate an interactive conceptual architecture visualization of the DT based on this ontology. We call it a *DT Constellation*, and it is based on a previous paper [2]

We then generate a reporting page integrating the characteristics table and the conceptual architecture from a CI/CD pipeline. You can view it at https://oakeslab-polymtl.github.io/DTDF/.

## Architecture

TODO: Diagram of the architecture

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

[2] Oakes, B. J., Parsai, A., Van Mierlo, S., Demeyer, S., Denil, J., De Meulenaere, P. and Vangheluwe, H. (2021). Improving Digital Twin Experience Reports. In Proceedings of the 9th International Conference on Model-Driven Engineering and Software Development - MODELSWARD; ISBN 978-989-758-487-9; ISSN 2184-4348, SciTePress, pages 179-190. DOI: 10.5220/0010236101790190

## License

This project is licensed under the 
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).