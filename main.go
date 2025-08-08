package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	log.Fatal(http.ListenAndServeTLS(":8080", "server.crt", "server.key", nil))
}