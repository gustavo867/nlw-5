defmodule InmanaWeb.RestaurantsController do
  use InmanaWeb, :controller

  alias InmanaWeb.FallbackController
  alias Inmana.Restaurant

  action_fallback FallbackController

  def create(conn, params) do
    with {:ok, %Restaurant{} = restaurant} <- Inmana.create_restaurant(params) do
      conn
      |> put_status(:created)
      |> render("create.json", restaurant: restaurant)
    end
  end
end
