#!/bin/bash

if [ "$#" -lt 1 ]; then
	echo "No arguments supplied"
fi

if [ "$#" -gt 4 ]; then
	echo "Introduce 4 arguments"
else
	for arg in "$@"
	do
		echo "$arg"
	done
fi
