using Documenter
export hello 

"""
    hello(who::String)

Return "Hello, `who`".

```jldoctest
julia> hello("Stranger")
"Hello, Stranger"
```
"""
hello(who::String) = "Hello, $who"

# Code evaluation `@example`

```@example
import Random # hide
Random.seed!(1) # hide
A = rand(3, 3)
b = [1, 2, 3]
A \ b
```
