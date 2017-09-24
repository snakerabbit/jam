class Api::UserAnswersController < ApplicationController
  def index
    @user_answers = UserAnswer.includes(:question).where("user_id =  ?", user_answer_params[:user_id])
    if @user_answers
      render :index
    else
      render json: []
    end
  end

  def create
    @user_answer = UserAnswer.new(user_answer_params)
    @question = @user_answer.question
    @user_answers = UserAnswer.inclues(:question).where("user_id = ?", user_answer_params[:user_id])

    if @user_answer.save
      render :index
    else
      render json: []
    end

  end

  def show
    @user_answer = UserAnswer.find(params[:id])
    if @user_answer
      render :show
    else
      render json: []
    end
  end

  private

  def user_answer_params
    params.require(:user_answer).permit(
      :answer_id,
      :user_id,
      :importance,
      :explanation,
      :accepted_choices
    )
  end
end
