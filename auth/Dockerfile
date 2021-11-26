FROM golang

RUN mkdir /app

WORKDIR /app

COPY . /app/

RUN go build -o main .

CMD ["go", "run" , "main.go"]