class StaticPagesController < ApplicationController

  before_action :logged_in?, only: [:mmc]
  
  def index
  end

  def terms
  end

  def privacy
  end

  def smm
  end

  def seo
  end

  def ppc
  end

  def special
  end

  def dream
  end

  def mmc
  end

  private

  def logged_in?
    unless session[:email_id]
      flash[:notice] = "You must register your email first."
      redirect_to(mm_path)
    end
  end

end
