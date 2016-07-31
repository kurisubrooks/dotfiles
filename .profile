# Colour Prompt
export GREP_OPTIONS="--color=auto"

# PS1 Export "~ $"
export PS1="\[\033[38;5;11m\]\w\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput sgr0)\]\[\033[38;5;10m\]\\$\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput sgr0)\]"

# Python 3.5 Path
PATH="/Library/Frameworks/Python.framework/Versions/3.5/bin:${PATH}"
export PATH
