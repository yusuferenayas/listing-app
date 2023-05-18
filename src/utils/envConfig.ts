enum requiredVariables {
  'NEXT_PUBLIC_LIMIT' = 'NEXT_PUBLIC_LIMIT',
}

enum optionalVariables {}

type RequiredVariables = keyof typeof requiredVariables
// prettier-ignore
const publicEnvVar: { [key in RequiredVariables]:  string  } = {
  [requiredVariables.NEXT_PUBLIC_LIMIT]: process.env.NEXT_PUBLIC_LIMIT!,

}

type OptionalVariables = keyof typeof optionalVariables
// prettier-ignore
const publicOptionalEnvVar: { [key in OptionalVariables]: string } = {
}

type Config = Readonly<
  { [key in RequiredVariables]: string } & {
    [key in OptionalVariables]: string | undefined
  }
>

// ensure that all of the env vars are provided
const ensureConfig = (config: { [key: string]: string }): Config => {
  const checked = Object.values(requiredVariables).reduce((acc, key) => {
    return { ...acc, [key]: config[key] }
  }, {} as any as Config)

  return { ...checked, ...publicOptionalEnvVar }
}

export const envPublicConfig = ensureConfig(publicEnvVar)
