using julia_repo_setup
using Documenter

DocMeta.setdocmeta!(
  julia_repo_setup,
  :DocTestSetup,
  :(using julia_repo_setup);
  recursive = true,
)

makedocs(;
  modules = [julia_repo_setup],
  authors = "Norel <norel.evoagile@gmail.com> and contributors",
  repo = "https://github.com/evoagile/julia_repo_setup.jl/blob/{commit}{path}#{line}",
  sitename = "julia_repo_setup.jl",
  format = Documenter.HTML(;
    prettyurls = get(ENV, "CI", "false") == "true",
    canonical = "https://evoagile.github.io/julia_repo_setup.jl",
    edit_link = "master",
    assets = String[],
  ),
  pages = ["Home" => "index.md"],
)

deploydocs(;
  repo = "github.com/evoagile/julia_repo_setup.jl",
  devbranch = "master",
)
