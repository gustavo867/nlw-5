defmodule Inmana.RestaurantTest do
  use Inmana.DataCase, async: true

  alias Ecto.Changeset
  alias Inmana.Restaurant


  describe "changeset/1" do
    test "when all params are valid, returns a valid chanseget" do
      params = %{name: "Siri cascudo", email: "siricascudo@gmail.com"}

      response = Restaurant.changeset(params)

      assert %Changeset{
        changes: %{
          name: "Siri cascudo",
          email: "siricascudo@gmail.com"
        },
        valid?: true
      } = response
    end

    test "when the are invalid params, returns a invalid chanseget" do
      params = %{name: "S", email: ""}
      expect_response = %{
        email: ["can't be blank"],
        name: ["should be at least 2 character(s)"]
      }

      response = Restaurant.changeset(params)

      assert %Changeset{valid?: false} = response

      assert errors_on(response) == expect_response
    end
  end
end
