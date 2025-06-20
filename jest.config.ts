import type { JestConfigWithTsJest } from 'ts-jest'
import dotenv from 'dotenv'

console.log(
`
___________________________________________________________
        ___    __                 _ __  __            
       /   |  / /___ _____  _____(_) /_/ /_  ____ ___ 
      / /| | / / __ \\/ __ \\/ ___/ / __/ __ \\/ __ \\__ \\
     / ___ |/ / /_/ / /_/ / /  / / /_/ / / / / / / / /
    /_/  |_/_/\\__, /\\____/_/  /_/\\__/_/ /_/_/ /_/ /_/ 
             /____/                                   
___________________________________________________________
`
)


const env = process.env.NODE_ENV

dotenv.config( { path: [
	`.env.${ env }.local`,
	`.env.${ env }`,
	'.env.local',
	'.env'
] } )


/**
 * Initial file generated with `npx ts-jest config:init`
 * 
 */
const config: JestConfigWithTsJest = {
	/** https://jestjs.io/docs/configuration#testenvironment-string */
	testEnvironment: 'node',
	moduleDirectories: [ 'node_modules', '<rootDir>/' ],
	testMatch: [ '**/__tests__/**/*.(test|spec).ts' ],
	/**
	 * If you're using [Module Path Aliases](https://nextjs.org/docs/advanced-features/module-path-aliases),
	 * you will have to add the moduleNameMapper in order for jest to resolve your absolute paths.
	 * The paths have to be matching with the paths option within the compilerOptions in the tsconfig.json
	 */
	moduleNameMapper: {
		'@/(.*)$': '<rootDir>/src/$1',
	},
	transform: {
		'^.+.tsx?$': [ 'ts-jest', {} ],
	},
}

export default config