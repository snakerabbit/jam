class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end



  def index
    @users = User.all.where("username != ?", current_user.username)
    if @users
      render :index
    else
      render json: @users.errors, status: 422
    end
  end

  def filter
    @users = User.where(instrument: params[:instrument]).where("username != ?", current_user.username)
    if @users
      render :index
    else
      render json: @users.errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :instrument, :image_url, :about_me, :fave_bands, :fave_genres, :purpose)
  end
end
