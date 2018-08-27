class EmailsController < ApplicationController

  def index
  end

  def new
    @email = Email.new
  end

  def create
    @email = Email.new(params.require(:email).permit(:email))
    if @email.save
      session[:email_id] = @email.id
      redirect_to(mmc_path)
    end
  end

end
