var documenterSearchIndex = {"docs":
[{"location":"julia_2nd_lang/chap1_why_julia/#Why-Julia?","page":"Why Julia?","title":"Why Julia?","text":"","category":"section"},{"location":"julia_2nd_lang/chap16_organizing_and_modularizing_your_code/#Organizing-and-modularizing-your-code","page":"Setup Packages","title":"Organizing and modularizing your code","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/#Setup-Julia-Repo-in-GitHub-with-Actions","page":"Setup Environments","title":"Setup Julia Repo in GitHub with Actions","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/#Install-Julia","page":"Setup Environments","title":"Install Julia","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/","page":"Setup Environments","title":"Setup Environments","text":"Basically if you are using Linux or Mac, you can easily install Julia by the package manager. For Gentoo, we can install it with portage as following.","category":"page"},{"location":"julia_2nd_lang/setup_github_env/","page":"Setup Environments","title":"Setup Environments","text":"$ sudo emerge -av julia\n","category":"page"},{"location":"julia_2nd_lang/setup_github_env/","page":"Setup Environments","title":"Setup Environments","text":"The problem to install Julia by Gentoo package manager is slow upgrade speed. In this time, July 27 2023, latest stable version version of Julia in the official site is 1.9.2 but Gentoo still has 1.8.5 as the latest one. To overcome this gap, according to the instruction in Julia GitHub we can easily install it by compiling source.","category":"page"},{"location":"julia_2nd_lang/setup_github_env/","page":"Setup Environments","title":"Setup Environments","text":"$ cd localgit  <-- local git directory\n$ git clone https://github.com/JuliaLang/julia.git\n$ cd julia\n$ git checkout v1.9.2  <-- tag for latest version\n$ make\n$ ln -s julia ~/.local/bin/julia  <-- This should be earlier path than /usr/bin/julia","category":"page"},{"location":"julia_2nd_lang/setup_github_env/#Setup-Julia-language-server-for-Neovim","page":"Setup Environments","title":"Setup Julia language server for Neovim","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/","page":"Setup Environments","title":"Setup Environments","text":"note: Note\nThis setup is based on cloned Neovim-from-scratch repo and Github repo: evoagile_configs.","category":"page"},{"location":"julia_2nd_lang/setup_github_env/","page":"Setup Environments","title":"Setup Environments","text":"To setup LSP(Language Server Protocol) with julials.lua file in Neovim-from-scratch, we need to setup nvim-lspconfig environment first. Using stow tool, we can copy Makefile to ~/.julia/environments/nvim-lspconfig/.","category":"page"},{"location":"julia_2nd_lang/setup_github_env/","page":"Setup Environments","title":"Setup Environments","text":"$ cd localgit/evoagile_configs   <-- if your local cloned repo is in localgit\n$ stow -t ~ julia\n$ cd ~/.julia/environments/nvim-lspconfig/\n$ make","category":"page"},{"location":"julia_2nd_lang/setup_github_env/#Setup-Julia-Formatter-for-Neovim","page":"Setup Environments","title":"Setup Julia Formatter for Neovim","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/#Setup-Julia-Language-server-in-NeoVim","page":"Setup Environments","title":"Setup Julia Language server in NeoVim","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/#Use-[PkgTemplates](https://github.com/JuliaCI/PkgTemplates.jl)-to-generate-repository","page":"Setup Environments","title":"Use PkgTemplates to generate repository","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/#Use-[GitHub-CLI](https://cli.github.com/)-to-create-repository-in-GitHub","page":"Setup Environments","title":"Use GitHub-CLI to create repository in GitHub","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/#References","page":"Setup Environments","title":"References","text":"","category":"section"},{"location":"julia_2nd_lang/setup_github_env/","page":"Setup Environments","title":"Setup Environments","text":"Github repo: evoagile_configs\nGithub repo: Neovim-from-scratch/27-Julia-REPL\nSetting up Julia lsp for Neovim\ndiscourse: Neovim + LanguageServer.jl","category":"page"},{"location":"julia_2nd_lang/chap2_julia_as_a_calculator/#Julia-as-a-calculator","page":"Julia as a Calculator","title":"Julia as a calculator","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = julia_repo_setup","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n\"julia_2nd_lang/setup_github_env.md\",\n\"julia_2nd_lang/chap1_why_julia.md\",\n\"julia_2nd_lang/chap16_organizing_and_modularizing_your_code.md\",\n\"julia_2nd_lang/chap2_julia_as_a_calculator.md\"\n]\nDepth = 1","category":"page"},{"location":"#Study-Schedule-(2023)","page":"Home","title":"Study Schedule (2023)","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Date Range Presenter\nAug 3 Setup Julia Repo in GitHub with Actions Norel\nAug 10 Why Julia? Kjeong\nAug 17 Organizing and modularizing your code Norel\nAug 24 Julia as a calculator Kjeong","category":"page"},{"location":"#julia*repo*setup","page":"Home","title":"juliareposetup","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for juliareposetup.","category":"page"},{"location":"#Images","page":"Home","title":"Images","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Evoagile logo)","category":"page"},{"location":"#Functions","page":"Home","title":"Functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This is a paragraph.","category":"page"},{"location":"","page":"Home","title":"Home","text":"function func(x)\n    # ...\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"Another paragraph.","category":"page"},{"location":"","page":"Home","title":"Home","text":"A code block without a \"language\":","category":"page"},{"location":"","page":"Home","title":"Home","text":"function func(x)\n    # ...\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"and another one with the \"language\" specified as julia:","category":"page"},{"location":"","page":"Home","title":"Home","text":"function func(x)\n    # ...\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"link to Example.jl Documentation\nlink to OpenCore Legacy Patcher","category":"page"},{"location":"","page":"Home","title":"Home","text":"A paragraph containing a numbered footnote [1] and a named one [note].","category":"page"},{"location":"","page":"Home","title":"Home","text":"Here's a quote:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Julia is a high-level, high-performance dynamic programming language for technical computing, with syntax that is familiar to users of other technical computing environments.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Another list:","category":"page"},{"location":"","page":"Home","title":"Home","text":"item one\nitem two\nf(x) = x\nAnd a sublist:\nsub-item one\nsub-item two","category":"page"},{"location":"","page":"Home","title":"Home","text":"f(a) = frac12piint_0^2pi (alpha+Rcos(theta))dtheta","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Note\nThis is the content of the note.","category":"page"},{"location":"","page":"Home","title":"Home","text":"tip: Tip\nThis is the content of the tip.","category":"page"},{"location":"","page":"Home","title":"Home","text":"warning: Beware!\nAnd this is another one.This warning admonition has a custom title: \"Beware!\".","category":"page"},{"location":"","page":"Home","title":"Home","text":"[1]: Numbered footnote text.","category":"page"},{"location":"","page":"Home","title":"Home","text":"[note]: Named footnote text containing several toplevel elements.item one\nitem two\nitem threefunction func(x)\n    # ...\nend\n","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [julia_repo_setup]","category":"page"},{"location":"#julia_repo_setup.bar-Tuple{Number}","page":"Home","title":"julia_repo_setup.bar","text":"bar(x[, y])\n\nCompute the Bar index between x and y.\n\nIf y is unspecified, compute the Bar index between all pairs of columns of x.\n\nExamples\n\njulia> bar([1, 2], [1, 2])\n1\n\n\n\n\n\n","category":"method"},{"location":"#julia_repo_setup.binom-Tuple{Number}","page":"Home","title":"julia_repo_setup.binom","text":"Here's some inline maths: sqrtn1 + x + x^2 + ldots.\n\nHere's an equation:\n\nfracnk(n - k) = binomnk\n\nThis is the binomial coefficient.\n\n\n\n\n\n","category":"method"},{"location":"#julia_repo_setup.cosine-Tuple{Number}","page":"Home","title":"julia_repo_setup.cosine","text":"cosine(x)\n\nCalculate the cosine of an angle x given in radians.\n\n\n\n\n\n","category":"method"},{"location":"#julia_repo_setup.f-Tuple{Any}","page":"Home","title":"julia_repo_setup.f","text":"Here's some inline maths: sqrtn1 + x + x^2 + ldots.\n\nHere's an equation:\n\nfracnk(n - k) = binomnk\n\nThis is the binomial coefficient.\n\n\n\n\n\n","category":"method"},{"location":"#julia_repo_setup.hello-Tuple{String}","page":"Home","title":"julia_repo_setup.hello","text":"hello(who::String)\n\nReturn \"Hello, who\".\n\njulia> hello(\"Stranger\")\n\"Hello, Stranger\"\n\n\n\n\n\n","category":"method"},{"location":"#julia_repo_setup.plus-Tuple{Number, Number}","page":"Home","title":"julia_repo_setup.plus","text":"plus(x, y)\n\nCalculate add x and y.\n\n\n\n\n\n","category":"method"},{"location":"#julia_repo_setup.sine-Tuple{Number}","page":"Home","title":"julia_repo_setup.sine","text":"sine(x)\n\nCalculate the sine of an angle x given in radians.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"a = 1\nb = 2\na + b","category":"page"},{"location":"","page":"Home","title":"Home","text":"import Random # hide\nRandom.seed!(1) # hide\nA = rand(3, 3)\nb = [1, 2, 3]\nA \\ b","category":"page"},{"location":"","page":"Home","title":"Home","text":"First we define some functions","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Plots # hide\nf(x) = sin(2x) + 1\ng(x) = cos(x) - x","category":"page"},{"location":"","page":"Home","title":"Home","text":"and then we plot f over the interval from -π to π","category":"page"},{"location":"","page":"Home","title":"Home","text":"x = range(-π, π; length=50)\nplot(x, f.(x), color = \"red\")\nsavefig(\"f-plot.svg\"); nothing # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"","page":"Home","title":"Home","text":"and then we do the same with g","category":"page"},{"location":"","page":"Home","title":"Home","text":"plot(x, g.(x), color = \"blue\")\nsavefig(\"g-plot.svg\"); nothing # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Gadfly # hide\nplot([sin, x -> 2sin(x) + x], -2π, 2π)\ndraw(SVG(\"plot.svg\", 6inch, 4inch), ans); nothing # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"","page":"Home","title":"Home","text":"printstyled(\"Here are some colors:\\n\"; color=:red, bold=true)\nfor color in 0:15\n    print(\"\\e[38;5;$(color);48;5;$(color)m  \")\n    print(\"\\e[49m\", lpad(color, 3), \" \")\n    color % 8 == 7 && println()\nend\nprint(\"\\e[m\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"for i in 1:3\n    j = i^2","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some text explaining what we should do with j","category":"page"},{"location":"","page":"Home","title":"Home","text":"    println(j)\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"a = 1\nb = 2\na + b","category":"page"},{"location":"","page":"Home","title":"Home","text":"using RDatasets\nusing DataFrames\niris = dataset(\"datasets\", \"iris\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"println(iris)","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> a = 1\n1\n\njulia> b = 2;\n\njulia> c = 3;  # comment\n\njulia> a + b + c\n6","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> div(1, 0)\nERROR: DivideError: integer division error\n[...]","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> foo = 42\n42","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> println(foo)\n42","category":"page"},{"location":"","page":"Home","title":"Home","text":"DocTestSetup = quote\n    function foo(x)\n        return x^2\n    end\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> foo(2)\n4","category":"page"},{"location":"","page":"Home","title":"Home","text":"DocTestSetup = nothing","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> foo(2)\n4","category":"page"},{"location":"","page":"Home","title":"Home","text":"DocTestFilters = r\"[0-9\\.]+ seconds \\(.*\\)\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> @time [1,2,3,4]\n  0.000003 seconds (5 allocations: 272 bytes)\n4-element Vector{Int64}:\n 1\n 2\n 3\n 4","category":"page"},{"location":"","page":"Home","title":"Home","text":"DocTestFilters = nothing","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> @time [1,2,3,4]\n  0.000003 seconds (5 allocations: 272 bytes)\n4-element Vector{Int64}:\n 1\n 2\n 3\n 4","category":"page"}]
}
