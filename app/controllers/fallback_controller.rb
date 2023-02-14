# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: 'public/index.html'
    # render file: 'client/public/index.html'
    # /Users/seanmartin/Development/Code/Capstone/freelance-rate/client/public/index.html

    # client/public/index.html
  end
end
