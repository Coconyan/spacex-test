export type BuildMode = 'production' | 'development';

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string
}

export interface IBuildEnv {
  mode: BuildMode,
  port: number,
  analyze: boolean,
}

export interface IBuildOptions {
  paths: BuildPaths,
  mode: BuildMode,
  isDev: boolean,
  analyze: boolean,
  port: number,
}
