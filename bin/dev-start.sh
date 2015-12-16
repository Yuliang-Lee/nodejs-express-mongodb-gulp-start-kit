DIR="$( cd "$( dirname "$0" )" && pwd )"
cd $DIR/../

export NODE_PATH=.
export NODE_ENV=development

gulp startDev
