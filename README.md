# RCMP NC3 Report a Cybercrime Alpha Documentation

Documenting CDS and RCMP's work to help Canadians report a cybercrime or fraud

## Setting up your Macbook to have Ruby (very first time only)

Install Ruby
```
brew install ruby
```

Copy the line into your ~/.zshrc or ~/.bashrc

```
export PATH=/usr/local/opt/ruby/bin:$PATH
```

Restart your terminal (e.g. Quit and relaunch iTerm)
```
bundle update --bundler
```

## Editing the documentation

The documentation uses [Jekyll](http://jekyllrb.com/) and the [DOCter](https://github.com/cfpb/DOCter) theme.

DOCter needs Jekyll and other dependencies to run locally. These can be installed with Bundler by running the following commands.

```
gem install bundler
bundle install
```

Run Jekyll:

```
bundle exec jekyll serve --watch --baseurl ''
```

Open it up in your browser: <http://localhost:4000/>


### _config.yml

Options within the `_config.yml` file allow you to control some of the site's
content and left column navigation.
