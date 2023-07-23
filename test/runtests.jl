using julia_repo_setup
using Test, Documenter

@testset "All  tests" begin
  include("trigtests.jl")
  doctest(julia_repo_setup, manual=false)
end
