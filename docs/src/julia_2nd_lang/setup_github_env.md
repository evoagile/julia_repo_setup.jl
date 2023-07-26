# Setup Julia Repo in GitHub with Actions

## Install Julia

Basically if you are using Linux or Mac, you can easily install Julia by the package manager.
For Gentoo, we can install it with portage as following.

```shell
$ sudo emerge -av julia

```

The problem to Gentoo package manager to install is slow upgrade speed for Julia.
In this time, latest stable version version of Julia in the
[official site](https://julialang.org/downloads/) is 1.9.2 but Gentoo still has
1.8.5 as the latest.
To overcome to this gap, according to the instruction in [Julia GitHub](https://github.com/JuliaLang/julia)
we can easily install it by compiling source.

```shell
$ cd localgit  <-- local git directory
$ git clone https://github.com/JuliaLang/julia.git
$ cd julia
$ git checkout v1.9.2  <-- tag for latest version
$ make
$ ln -s julia ~/.local/bin/julia  <-- This should be earlier path than /usr/bin/julia
```

## Setup Julia language server for Neovim

This setup is based on cloned
[Neovim-from-scratch](https://github.com/erdosxx/Neovim-from-scratch/tree/27_Julia_REPL) repo.
With the LSP([Language Server Protocol](https://microsoft.github.io/language-server-protocol/))
setting file for Julia,
[julials.lua](https://github.com/erdosxx/Neovim-from-scratch/blob/27_Julia_REPL/lua/user/lsp/settings/julials.lua), we need to setup Julia environment as following commend.

```shell
$ julia --project=~/.julia/environments/nvim-lspconfig \
-e 'using Pkg; Pkg.add("LanguageServer")'
```

## Setup Julia Formatter for Neovim

### Setup Julia Language server in NeoVim

## Use [PkgTemplates](https://github.com/JuliaCI/PkgTemplates.jl) to generate repository

## Use [GitHub-CLI](https://cli.github.com/) to create repository in GitHub

## References

1. [Github repo: evoagile_configs](https://github.com/erdosxx/evoagile_configs)
2. [Github repo: Neovim-from-scratch/27-Julia-REPL](https://github.com/erdosxx/Neovim-from-scratch/tree/27_Julia_REPL)
3. [Setting up Julia lsp for Neovim](https://www.juliabloggers.com/setting-up-julia-lsp-for-neovim/)
4. [discourse: Neovim + LanguageServer.jl](https://discourse.julialang.org/t/neovim-languageserver-jl/37286/63?page=5)
