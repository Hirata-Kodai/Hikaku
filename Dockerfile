FROM python:3.10.4-buster
RUN apt-get update && apt-get install -y \
	curl \
	less \
	vim

WORKDIR /Hikaku
# python パッケージのインストール
COPY ./requirements.txt /Hikaku
RUN pip install --no-cache -U pip && pip install --no-cache -r requirements.txt
# node.js LTS のインストール
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && apt-get install -y nodejs
# npm パッケージのインストール
COPY ./package.json /Hikaku
RUN npm install
CMD ["flask", "run", "-h", "0.0.0.0"]
