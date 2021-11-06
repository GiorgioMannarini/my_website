FROM continuumio/miniconda3

COPY requirements.yml .
RUN conda env create -f requirements.yml

COPY . .

ENTRYPOINT ["conda", "run", "-n", "pytorch_env", \
            "python3", "run.py"]