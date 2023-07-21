export plus, sine, cosine, binom, bar 

"""
    plus(x, y)
Calculate add `x` and `y`.
"""
function plus(x::Number, y::Number)
  x + y
end

"""
    sine(x)
Calculate the sine of an angle `x` given in radians.
"""
function sine(x::Number)
  n = 9
  total = 0
  for i = 0:n
    total += (-1)^i * x^(2i + 1) / factorial(2i + 1)
  end
  total
end

"""
    cosine(x)
Calculate the cosine of an angle `x` given in radians.
"""
function cosine(x::Number)
  n = 9
  total = 0
  mapreduce(+, 0:n) do i
    (-1)^i * x^(2i) / factorial(2i)
  end
end

"""
Here's some inline maths: ``\\sqrt[n]{1 + x + x^2 + \\ldots}``.

Here's an equation:

``\\frac{n!}{k!(n - k)!} = \\binom{n}{k}``

This is the binomial coefficient.
"""
function binom(x::Number)
  bino = 0
  bino
end

"""
    bar(x[, y])

Compute the Bar index between `x` and `y`.

If `y` is unspecified, compute the Bar index between all pairs of columns of `x`.

# Examples
```julia-repl
julia> bar([1, 2], [1, 2])
1
```

See also [`bar!`](@ref), [`baz`](@ref), [`baaz`](@ref).
"""
function bar(x::Number)
  bar = 0
end
