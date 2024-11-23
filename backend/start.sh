#!/bin/bash
uvicorn src.server.index:app --host 0.0.0.0 --port 10000 --reload