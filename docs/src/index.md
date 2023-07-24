```@meta
CurrentModule = julia_repo_setup
```

```@contents

```

# julia_repo_setup

Documentation for [julia_repo_setup](https://github.com/evoagile/julia_repo_setup.jl).

# Functions

```@docs
binom(x::Number)
cosine(x::Number)
```

This is a paragraph.

    function func(x)
        # ...
    end

Another paragraph.

A code block without a "language":

```
function func(x)
    # ...
end
```

and another one with the "language" specified as `julia`:

```julia
function func(x)
    # ...
end
```

- link to [Example.jl Documentation](https://documenter.juliadocs.org/stable/man/guide/#Package-Guide)
- link to [OpenCore Legacy Patcher](https://dortania.github.io/OpenCore-Legacy-Patcher/INSTALLER.html)

A paragraph containing a numbered footnote [^1] and a named one [^note].

Here's a quote:

> Julia is a high-level, high-performance dynamic programming language for
> technical computing, with syntax that is familiar to users of other
> technical computing environments.

Another list:

- item one
- item two
  ```
  f(x) = x
  ```
- And a sublist:
  - sub-item one
  - sub-item two

```math
f(a) = \frac{1}{2\pi}\int_{0}^{2\pi} (\alpha+R\cos(\theta))d\theta
```

| Column One | Column Two | Column Three |
| :--------- | ---------- | :----------: |
| Row `1`    | Column `2` |              |
| _Row_ 2    | **Row** 2  |  Column `3`  |

!!! note

    This is the content of the note.

!!! tip

    This is the content of the tip.

!!! warning "Beware!"

    And this is another one.

    This warning admonition has a custom title: `"Beware!"`.

[^1]: Numbered footnote text.
[^note]: Named footnote text containing several toplevel elements.

    - item one
    - item two
    - item three

    ```julia
    function func(x)
        # ...
    end

    ```

```@index

```

```@autodocs
Modules = [julia_repo_setup]
```

```@example
a = 1
b = 2
a + b
```

```@example
import Random # hide
Random.seed!(1) # hide
A = rand(3, 3)
b = [1, 2, 3]
A \ b
```

First we define some functions

```@example 1
using Plots # hide
f(x) = sin(2x) + 1
g(x) = cos(x) - x
```

and then we plot `f` over the interval from `-π` to `π`

```@example 1
x = range(-π, π; length=50)
plot(x, f.(x), color = "red")
savefig("f-plot.svg"); nothing # hide
```

![](f-plot.svg)

and then we do the same with `g`

```@example 1
plot(x, g.(x), color = "blue")
savefig("g-plot.svg"); nothing # hide
```

![](g-plot.svg)

```@example
using Gadfly # hide
plot([sin, x -> 2sin(x) + x], -2π, 2π)
draw(SVG("plot.svg", 6inch, 4inch), ans); nothing # hide
```

![](plot.svg)

```@example
printstyled("Here are some colors:\n"; color=:red, bold=true)
for color in 0:15
    print("\e[38;5;$(color);48;5;$(color)m  ")
    print("\e[49m", lpad(color, 3), " ")
    color % 8 == 7 && println()
end
print("\e[m")
```

```@example half-loop; continued = true
for i in 1:3
    j = i^2
```

Some text explaining what we should do with `j`

```@example half-loop
    println(j)
end
```

```@repl
a = 1
b = 2
a + b
```

```@setup abc
using RDatasets
using DataFrames
iris = dataset("datasets", "iris")
```

```@example abc
println(iris)
```

```jldoctest
julia> a = 1
1

julia> b = 2;

julia> c = 3;  # comment

julia> a + b + c
6
```

```jldoctest
julia> div(1, 0)
ERROR: DivideError: integer division error
[...]
```

```jldoctest mylabel
julia> foo = 42
42
```

```jldoctest mylabel
julia> println(foo)
42
```

```@meta
DocTestSetup = quote
    function foo(x)
        return x^2
    end
end
```

```jldoctest
julia> foo(2)
4
```

```@meta
DocTestSetup = nothing
```

```jldoctest; setup = :(foo(x) = x^2)
julia> foo(2)
4
```

```@meta
DocTestFilters = r"[0-9\.]+ seconds \(.*\)"
```

```jldoctest
julia> @time [1,2,3,4]
  0.000003 seconds (5 allocations: 272 bytes)
4-element Vector{Int64}:
 1
 2
 3
 4
```

```@meta
DocTestFilters = nothing
```

```jldoctest; filter = r"[0-9.]+ seconds (.*)"
julia> @time [1,2,3,4]
  0.000003 seconds (5 allocations: 272 bytes)
4-element Vector{Int64}:
 1
 2
 3
 4
```
