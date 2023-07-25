# Setup Julia Repo in GitHub with Actions

## Setup Julia language server for Neovim

This setup is based on cloned [Neovim-from-scratch](https://github.com/erdosxx/Neovim-from-scratch/tree/27_Julia_REPL) repo.
With the lsp setting file for Julia, [julials.lua](https://github.com/erdosxx/Neovim-from-scratch/blob/27_Julia_REPL/lua/user/lsp/settings/julials.lua) and we need to setup Julia environment as following commend.

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
3. [discourse: Neovim + LanguageServer.jl](https://discourse.julialang.org/t/neovim-languageserver-jl/37286/63?page=5)
