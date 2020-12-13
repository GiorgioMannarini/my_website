var shapWeight = {
    "data": [
        {
            "meta": {
                "columnNames": {
                    "x": "SHAP_abs",
                    "y": "Variable",
                    "marker": {
                        "color": "Sign"
                    }
                }
            },
            "mode": "markers",
            "type": "bar",
            "xsrc": "francescoposa:41:2db661",
            "x": [
                "0.0003897984892771123",
                "0.0006946246489282922",
                "0.0028140588346701216",
                "0.0033526838949822784",
                "0.003700426645473306",
                "0.0037101487060042185",
                "0.0038556077369526296",
                "0.0048052772420520895",
                "0.01043088025165648",
                "0.011850688160204115",
                "0.012010869008038163",
                "0.01793251678584518",
                "0.01817669364609196",
                "0.021989477743163947",
                "0.022890609985472658",
                "0.02408809076015523",
                "0.02833028618106682",
                "0.03029906109760304",
                "0.035310322688476926",
                "0.03745769739853638",
                "0.04141114084824792",
                "0.06001099576768496",
                "0.07846848892735732",
                "0.19000914499878443",
                "0.21476577985783843"
            ],
            "ysrc": "francescoposa:41:dd837c",
            "y": [
                "S_milkprogram",
                "S_hasanimals",
                "S_childma",
                "S_waterland",
                "S_foodprogram",
                "S_animalsinside",
                "S_childmaeduc",
                "dpisofirme",
                "S_garbage",
                "S_electricity",
                "S_seguropopular",
                "S_age",
                "S_cashtransfers",
                "S_childmaage",
                "S_washhands",
                "S_rooms",
                "S_childpa",
                "S_waterhouse",
                "S_childmaeduc_missing",
                "S_HHpeople",
                "S_childmaage_missing",
                "S_childpaage",
                "S_childpaeduc",
                "S_childpaage_missing",
                "S_childpaeduc_missing"
            ],
            "marker": {
                "meta": {
                    "columnNames": {
                        "color": "Sign"
                    }
                },
                "colorsrc": "francescoposa:41:d24187",
                "color": [
                    "#0563bb",
                    "#B33951",
                    "#B33951",
                    "#0563bb",
                    "#B33951",
                    "#0563bb",
                    "#B33951",
                    "#B33951",
                    "#0563bb",
                    "#0563bb",
                    "#B33951",
                    "#0563bb",
                    "#B33951",
                    "#0563bb",
                    "#0563bb",
                    "#0563bb",
                    "#B33951",
                    "#B33951",
                    "#B33951",
                    "#B33951",
                    "#0563bb",
                    "#0563bb",
                    "#B33951",
                    "#0563bb",
                    "#B33951"
                ]
            },
            "orientation": "h"
        }
    ],
    "layout": {
        "font": {
            "color": "rgb(0, 0, 0)"
        },
        "title": {
            "x": 0.5,
            "text": "Outcome:  Weight-for-height z-score"
        },
        "xaxis": {
            "type": "linear",
            "range": [
                0,
                0.2260692419556194
            ],
            "title": {
                "text": "SHAP Value (Blue = positive impact)"
            },
            "autorange": true
        },
        "yaxis": {
            "type": "category",
            "range": [
                -0.5,
                24.5
            ],
            "tickmode": "linear",
            "autorange": true
        },
        "autosize": true,
        "template": {
            "data": {
                "bar": [
                    {
                        "type": "bar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "table": [
                    {
                        "type": "table",
                        "cells": {
                            "fill": {
                                "color": "#EBF0F8"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#C8D4E3"
                            },
                            "line": {
                                "color": "white"
                            }
                        }
                    }
                ],
                "carpet": [
                    {
                        "type": "carpet",
                        "aaxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        },
                        "baxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        }
                    }
                ],
                "mesh3d": [
                    {
                        "type": "mesh3d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "contour": [
                    {
                        "type": "contour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "heatmap": [
                    {
                        "type": "heatmap",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatter": [
                    {
                        "type": "scatter",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "surface": [
                    {
                        "type": "surface",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "heatmapgl": [
                    {
                        "type": "heatmapgl",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "histogram": [
                    {
                        "type": "histogram",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "parcoords": [
                    {
                        "line": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        },
                        "type": "parcoords"
                    }
                ],
                "scatter3d": [
                    {
                        "type": "scatter3d",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattergl": [
                    {
                        "type": "scattergl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "choropleth": [
                    {
                        "type": "choropleth",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattergeo": [
                    {
                        "type": "scattergeo",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2d": [
                    {
                        "type": "histogram2d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatterpolar": [
                    {
                        "type": "scatterpolar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "contourcarpet": [
                    {
                        "type": "contourcarpet",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattercarpet": [
                    {
                        "type": "scattercarpet",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattermapbox": [
                    {
                        "type": "scattermapbox",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterpolargl": [
                    {
                        "type": "scatterpolargl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterternary": [
                    {
                        "type": "scatterternary",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2dcontour": [
                    {
                        "type": "histogram2dcontour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ]
            },
            "layout": {
                "geo": {
                    "bgcolor": "white",
                    "showland": true,
                    "lakecolor": "white",
                    "landcolor": "white",
                    "showlakes": true,
                    "subunitcolor": "#C8D4E3"
                },
                "font": {
                    "color": "#2a3f5f"
                },
                "polar": {
                    "bgcolor": "white",
                    "radialaxis": {
                        "ticks": "",
                        "gridcolor": "#EBF0F8",
                        "linecolor": "#EBF0F8"
                    },
                    "angularaxis": {
                        "ticks": "",
                        "gridcolor": "#EBF0F8",
                        "linecolor": "#EBF0F8"
                    }
                },
                "scene": {
                    "xaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    },
                    "yaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    },
                    "zaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "ticks": "",
                    "gridcolor": "#EBF0F8",
                    "linecolor": "#EBF0F8",
                    "automargin": true,
                    "zerolinecolor": "#EBF0F8",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "ticks": "",
                    "gridcolor": "#EBF0F8",
                    "linecolor": "#EBF0F8",
                    "automargin": true,
                    "zerolinecolor": "#EBF0F8",
                    "zerolinewidth": 2
                },
                "ternary": {
                    "aaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "baxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "caxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "bgcolor": "white"
                },
                "colorway": [
                    "#636efa",
                    "#EF553B",
                    "#00cc96",
                    "#ab63fa",
                    "#19d3f3",
                    "#e763fa",
                    "#fecb52",
                    "#ffa15a",
                    "#ff6692",
                    "#b6e880"
                ],
                "hovermode": "closest",
                "colorscale": {
                    "diverging": [
                        [
                            0,
                            "#8e0152"
                        ],
                        [
                            0.1,
                            "#c51b7d"
                        ],
                        [
                            0.2,
                            "#de77ae"
                        ],
                        [
                            0.3,
                            "#f1b6da"
                        ],
                        [
                            0.4,
                            "#fde0ef"
                        ],
                        [
                            0.5,
                            "#f7f7f7"
                        ],
                        [
                            0.6,
                            "#e6f5d0"
                        ],
                        [
                            0.7,
                            "#b8e186"
                        ],
                        [
                            0.8,
                            "#7fbc41"
                        ],
                        [
                            0.9,
                            "#4d9221"
                        ],
                        [
                            1,
                            "#276419"
                        ]
                    ],
                    "sequential": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ],
                    "sequentialminus": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ]
                },
                "plot_bgcolor": "white",
                "paper_bgcolor": "white",
                "shapedefaults": {
                    "line": {
                        "width": 0
                    },
                    "opacity": 0.4,
                    "fillcolor": "#506784"
                },
                "annotationdefaults": {
                    "arrowhead": 0,
                    "arrowcolor": "#506784",
                    "arrowwidth": 1
                }
            },
            "themeRef": "PLOTLY_WHITE"
        }
    },
    "frames": []
}