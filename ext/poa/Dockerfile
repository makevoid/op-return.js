FROM ruby

RUN gem install bundler:2.0.1

RUN curl -L https://github.com/ethereum/solidity/releases/download/v0.5.7/solc-static-linux -o /usr/bin/solc

RUN chmod 755 /usr/bin/solc

COPY Gemfile .

RUN bundle

COPY . .

CMD bundle exec rake
