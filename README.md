# The NJ DHS OneApp

A prototype for replacing the quick submit flow with a GraphQL API back-end on top of the existing OneApp Oracle database.

- [Sister Repositories](#sister-repositories)
- [Helpful Information in This Repo](#helpful-information-in-this-repo)
- [Running the OneApp Server](#running-the-oneapp-server)

## Sister Repositories

The following repositories may be helpful in addition to this one. Many of the repositories used to live in this repository, but we split them out into their own dedicated repos.

These repositories are currently private and will require approval from a New Jersey GitHub admin for access.

| Repo                | Description                                                                                                   |
| :------------------ | :------------------------------------------------------------------------------------------------------------ |
| dhs-oneapp-web      | The front-end resources for the OneApp prototype, built on top of Vue.js using the U.S. Web Design System.    |
| dhs-oneapp-database | The OneApp Oracle development database, Dockerized for ease of development.                                   |
| dhs-oneapp-legacy   | The legacy OneApp code base. This is from a snapshot early in 2020 and it does not contain the latest code.   |
| dhs-oneapp-software | Pre-downloaded dependencies for developers on the New Jersey network who may encounter firewall restrictions. |

## Helpful Information in This Repo

| Page                                                 | Description                                                                  |
| :--------------------------------------------------- | :--------------------------------------------------------------------------- |
| [/plan](/plan)                                      | Outlines initial goals and metrics for OneApp modernization.                 |
| [/development](/development)                         | Documentation on the legacy OneApp emails and stored procedures.             |
| [/docs/DFD_Validations](/docs/DFD_Validations)       | All of the legacy OneApp validations, documented and verified by New Jersey. |
| [/docs/lighthouse-reports](/docs/lighthouse-reports) | SEO reports against the legacy version of OneApp.                            |
| [/oneapp-server](/oneapp-server)                     | The code for the GraphQL API server.                                         |

This repository also contains a number of GitHub issues for tracking our development work. The issues have not been groomed and cleaned up since USDS stopped working on the project, so information in the GitHub issues may be outdated.

## Running the OneApp Server

Directions for running the server on Windows can be found here: [/development/Windows_Setup.md](/development/Windows_Setup.md)

To run on Mac / Linux install Git, node, and yarn and run:

`yarn install`

Available scripts and commands for the OneApp server can be found by exploring the `package.json` file.
