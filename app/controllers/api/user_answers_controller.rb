class Api::UserAnswersController < ApplicationController
  def index

  end

  def show

  end

  private

  def user_answer_params
    params.require(:user_answer).permit(
      :answer_id,
      :user_id,
    )
  end
end
