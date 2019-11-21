![genesisQL Logo](https://github.com/oslabs-beta/genesisQL/blob/dev/public/genesisCrop.png?raw=true)

#
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# GenesisQL
GenesisQL is **an open-source web-application that enables rapid schema-prototyping of GraphQL applications**, making your development process easier & faster. Made for developers, by developers.

Created by Adam Goren, Tom Herrmann, Xose Manolo, and Andrew Paisner.

## Features
- Generate graphQL schemas, types, and queries, through an inuitive graphical user interface (GUI)
- Specify which fields you'd like to use in your schema, and whether they are required or not
- View data retreived from API urls with a single search
- Copy generated schema code with a simple button click
- Outputted code includes ability to set up and run a functional apollo-server, and access graphQL playground

# Usage
1) Visit our website: [genesisQL Beta](http://www.genesisql.com/)
2) Enter an endpoint to retrieve your data from (e.g. https://swapi.co/api/people/2/)
3) Enter a name for your object type, and select input field names & types from the dropdown menu. Toggle if needed
4) Use the '+' button to add more fields as needed
5) Press submit to generate your schema output
6) Use the copy button to quickly select the outputted code, and paste it into your project folder as a new file
7) Install apollo server using your tool of choice (e.g. npm i apollo-server --save)
8) Simply run the new file, and the graphQL playground will appear
