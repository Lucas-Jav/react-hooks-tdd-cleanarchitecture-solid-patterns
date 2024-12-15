module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1', // tudo que vier depois do @/... ele vai trocar por <rootDir>/src/$1, o $1 sendo o que esta depois do @/
        '\\.scss$': 'identity-obj-proxy'
    }
}
