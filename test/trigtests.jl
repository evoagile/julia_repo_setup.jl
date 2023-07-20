@testset "plus tests" begin
  @test plus(1, 1) == 2
  @test plus(1, -1) == 0
  @test plus(3, -1) == 2
  @test plus(3, -3) == 0
end
