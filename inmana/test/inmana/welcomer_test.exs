defmodule Inmana.WelcomerTest do
  use ExUnit.Case, async: true

  alias Inmana.Welcomer

  describe "welcome/1" do
    test "when the user is special, returns a special message" do
      params = %{"name" => "banana", "age" => "42"}
      expected_result = {:ok, "You are very special banana"}

      result = Welcomer.welcome(params)

      assert result == expected_result
    end

    test "when the user isn't special, returns a message" do
      params = %{"name" => "gustavo", "age" => "25"}
      expected_result = {:ok, "Welcome gustavo"}

      result = Welcomer.welcome(params)

      assert result == expected_result
    end

    test "when the user age is under age, returns a message" do
      params = %{"name" => "gustavo", "age" => "16"}
      expected_result = {:error, "You shall not pass gustavo"}

      result = Welcomer.welcome(params)

      assert result == expected_result
    end
  end
end
