FROM ruby

RUN gem install bundler:2.0.1

COPY Gemfile .

RUN bundle

COPY . .

CMD bundle exec ruby
