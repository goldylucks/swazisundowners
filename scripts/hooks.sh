#!/bin/bash
set -e # stop on error

rm -f .git/hooks/pre-commit
touch .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
echo set -e >> .git/hooks/pre-commit
echo npm run lint >> .git/hooks/pre-commit
echo npm run lintstyle >> .git/hooks/pre-commit

echo pre-commit hooks installed successfully:
echo npm run lint
echo you can bypass them by passing --no-verify flag i.e. 
echo git commit -m "my awesome commit" --no-verify
exit 0
