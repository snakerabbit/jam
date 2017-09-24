class Api::UserAnswersController < ApplicationController
  def index
    @user_answers = UserAnswer.includes(:question).where("user_id =  ?", user_answer_params[:user_id])
    if @user_answers
      render :index
    else
      render json: []
    end
  end

  def show
    @user_answer = UserAnswer.new(user_answer_params)
  end

  def create

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
