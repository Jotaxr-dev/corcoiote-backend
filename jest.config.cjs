module.exports = {
    testEnviroment: "node",
    transform: {
        "^.+\\.ts$": [
            "@swc/jest", {
                jsc: {
                    parse: {syntax: "typescript"},
                    targte: "esnext"
                },
                module: { type: "commonjs"}
            }
        ]
    }
}