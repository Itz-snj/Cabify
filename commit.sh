#!/bin/bash
Activation_Keyword="commit"
Repo="$HOME/Desktop/code/Backend-Project/UBER-sheriyans"
default_msg="Auto-Commit via bash"
if [ "$1" != "$Activation_Keyword" ]; then
    echo "Usage: $0 $Activation_Keyword"
    exit 1
fi
if [ -d "$Repo" ]; then
    cd "$Repo" || exit
else
    echo "Error: Repository directory not found."
    exit 1
fi
if ! git status &>/dev/null; then
    echo "Error: Not a Git repository. Run 'git init' to initialize it."
    exit 1
fi
git add .
git commit -m "$default_msg"
git push
echo "Changes have been pushed successfully."
