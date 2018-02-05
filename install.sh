#!/usr/bin/env sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Relative path to dotfiles.
ROOT=$(git rev-parse --show-toplevel)


################################################################################
# GIT-COMPLETION
################################################################################

GIT_COMPLETION_BASH_URL=https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
GIT_COMPLETION_BASH_PATH=git/git-completion.bash.symlink

# Get latest git-completion script.
echo "Getting latest git-completion.bash."
curl -fsSL ${GIT_COMPLETION_BASH_URL} > ${GIT_COMPLETION_BASH_PATH}


################################################################################
# SYMLINKS
################################################################################

echo "Installing symlinks."
SYMLINKS=$(find . -not -path "*/\.git*" -name "*.symlink")

for SYMLINK in ${SYMLINKS}
do
    # Get basename from symlink.
    SYMLINK_FILE=$(basename ${SYMLINK})

    # Formulating .dotfile notation.
    DOTFILE=.$(echo ${SYMLINK_FILE} | sed -e "s/.symlink//g")

    # First remove .dotfiles.
    echo " - Removing ~/${DOTFILE}"
    rm -rf ~/${DOTFILE}

    # Then re-link them.
    echo " - Linking ${SYMLINK} to ~/${DOTFILE}"
    ln -fs "${ROOT}/${SYMLINK}" ~/${DOTFILE}
done


################################################################################
# ZSH
################################################################################

echo "Setting default shell to zsh."
chsh -s /bin/zsh
