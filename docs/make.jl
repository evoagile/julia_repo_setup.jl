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
  pages = [
    "Home" => "index.md",
    "Julia as a Second Language" => Any[
      "Setup Environments" => "julia_2nd_lang/setup_github_env.md",
      "Why Julia?" => "julia_2nd_lang/chap1_why_julia.md",
      "Setup Packages" => "julia_2nd_lang/chap16_organizing_and_modularizing_your_code.md",
      "Julia as a Calculator" => "chap2_julia_as_a_calculator.md",
    ],
  ],
)

deploydocs(;
  repo = "github.com/evoagile/julia_repo_setup.jl",
  devbranch = "master",
)
