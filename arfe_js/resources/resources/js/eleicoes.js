$(document).ready(function() {
    function btnAno() {
        $("#btn_2012").click(function() {
            var ano = $(this).html();
            clear();
            $("#content_ano").html("");
            $("#content_ano").append("<div>" + $(this).html() + "  >>>  </div>");
            $("#content_local").append("<img src='resources/images/load.gif'/>");

            var request = $.get("resources/json/City2012.json");

            request.done(function(obj) {
                $("#content_local").html("");
                //$('#content_local').append("<div style='margin-bottom: 5px; font-weight: bold;'> Localidade </div>");
                for (var x = 0; x < obj.json.length; x++) {
                    $("#content_local").append("<div class='btn_uf btn'>" + obj.json[x] + "</div>");
                }
                btnCity2012(ano);
            });
            request.fail(function(jqXHR, textStatus) {
                $("#content_local").html("");
                $("#content_local").append("Erro, por favor atualize a página!");
            });
        });
        
        $("#btn_2010").click(function() {
            var ano = $(this).html();
            clear();
            $("#content_ano").html("");
            //$('#content_ano').append("<div style='margin-bottom: 5px; font-weight: bold;'> Ano </div>");
            $("#content_ano").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_local").append("<img src='resources/images/load.gif'/>");

            var request = $.get("resources/json/Uf2010.json");
            
            request.done(function(obj) {
                $("#content_local").html("");
                //$('#content_local').append("<div style='margin-bottom: 5px; font-weight: bold;'> Localidade </div>");
                for (var x = 0; x < obj.json.length; x++) {
                    $("#content_local").append("<div class='btn_uf btn'>" + obj.json[x] + "</div>");
                }
                btnUf2010(ano);
            });
            request.fail(function(jqXHR, textStatus) {
                $("#content_local").html("");
                $("#content_local").append("Erro, por favor atualize a página!");
            });
        });

        $("#btn_2008").click(function() {
            var ano = $(this).html();
            clear();
            $("#content_ano").html("");
            $("#content_ano").append("<div>" + $(this).html() + "  >>>  </div>");
            $("#content_local").append("<img src='resources/images/load.gif'/>");

            var request = $.get("resources/json/City2008.json");
            
            request.done(function(obj) {
                $("#content_local").html("");
                //$('#content_local').append("<div style='margin-bottom: 5px; font-weight: bold;'> Localidade </div>");
                for (var x = 0; x < obj.json.length; x++) {
                    $("#content_local").append("<div class='btn_uf btn'>" + obj.json[x] + "</div>");
                }
                btnCity2008(ano);
            });
            request.fail(function(jqXHR, textStatus) {
                $("#content_local").html("");
                $("#content_local").append("Erro, por favor atualize a página!");
            });
        });
    
        $("#btn_2006").click(function() {
            var ano = $(this).html();
            clear();
            $("#content_ano").html("");
            //$('#content_ano').append("<div style='margin-bottom: 5px; font-weight: bold;'> Ano </div>");
            $("#content_ano").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_local").append("<img src='resources/images/load.gif'/>");

            var request = $.get("resources/json/Uf2006.json");
            
            request.done(function(obj) {
                $("#content_local").html("");
                //$('#content_local').append("<div style='margin-bottom: 5px; font-weight: bold;'> Localidade </div>");
                for (var x = 0; x < obj.json.length; x++) {
                    $("#content_local").append("<div class='btn_uf btn'>" + obj.json[x] + "</div>");
                }
                btnUf2006(ano);
            });
            request.fail(function(jqXHR, textStatus) {
                $("#content_local").html("");
                $("#content_local").append("Erro, por favor atualize a página!");
            });
        });

        $("#btn_2004").click(function() {
            var ano = $(this).html();
            clear();
            $("#content_ano").html("");
            $("#content_ano").append("<div>" + $(this).html() + "  >>>  </div>");
            $("#content_local").append("<img src='resources/images/load.gif'/>");

            var request = $.get("resources/json/City2004.json");
            
            request.done(function(obj) {
                $("#content_local").html("");
                //$('#content_local').append("<div style='margin-bottom: 5px; font-weight: bold;'> Localidade </div>");
                for (var x = 0; x < obj.json.length; x++) {
                    $("#content_local").append("<div class='btn_uf btn'>" + obj.json[x] + "</div>");
                }
                btnCity2004(ano);
            });
            request.fail(function(jqXHR, textStatus) {
                $("#content_local").html("");
                $("#content_local").append("Erro, por favor atualize a página!");
            });
        });
        
        $("#btn_2002").click(function() {
            var ano = $(this).html();
            clear();
            $("#content_ano").html("");
            //$('#content_ano').append("<div style='margin-bottom: 5px; font-weight: bold;'> Ano </div>");
            $("#content_ano").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_local").append("<img src='resources/images/load.gif'/>");

            var request = $.get("resources/json/Uf2002.json");

            request.done(function(obj) {
                $("#content_local").html("");
                //$('#content_local').append("<div style='margin-bottom: 5px; font-weight: bold;'> Localidade </div>");
                for (var x = 0; x < obj.json.length; x++) {
                    $("#content_local").append("<div class='btn_uf btn'>" + obj.json[x] + "</div>");
                }
                btnUf2002(ano);
            });
            request.fail(function(jqXHR, textStatus) {
                $("#content_local").html("");
                $("#content_local").append("Erro, por favor atualize a página!");
            });
        });
        
    }

    function btnUf2010(ano) {
        $(".btn_uf").click(function() {
            $("#content_local").html("");
            $("#content_local").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_cargo").html("");
            //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>DepEstadual</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>DepFederal</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Governador</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Senador</div>");
            if($(this).html() === "BR"){
                $("#content_cargo").html("");
                //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
                $("#content_cargo").append("<div class='btn btn_cargo'>Presidente</div>");
            }
            btnCargo2010(ano, $(this).html());
        });
    }
    
    function btnUf2006(ano) {
        $(".btn_uf").click(function() {
            $("#content_local").html("");
            $("#content_local").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_cargo").html("");
            //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>DepEstadual</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>DepFederal</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Governador</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Senador</div>");
            if($(this).html() === "BR"){
                $("#content_cargo").html("");
                //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
                $("#content_cargo").append("<div class='btn btn_cargo'>Presidente</div>");
            }
            btnCargo2006(ano, $(this).html());
        });
    }
    
    function btnUf2002(ano) {
        $(".btn_uf").click(function() {
            $("#content_local").html("");
            $("#content_local").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_cargo").html("");
            //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>DepEstadual</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>DepFederal</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Governador</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Senador</div>");
            if($(this).html() === "BR"){
                $("#content_cargo").html("");
                //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
                $("#content_cargo").append("<div class='btn btn_cargo'>Presidente</div>");
            }
            btnCargo2002(ano, $(this).html());
        });
    }  
    
    function btnCity2012(ano) {
        $(".btn_uf").click(function() {
            $("#content_local").html("");
            $("#content_local").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_cargo").html("");
            //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Vereador</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Prefeito</div>");
            btnCargo2012(ano, $(this).html());
        });
    }

    function btnCity2008(ano) {
        $(".btn_uf").click(function() {
            $("#content_local").html("");
            $("#content_local").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_cargo").html("");
            //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Vereador</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Prefeito</div>");
            btnCargo2008(ano, $(this).html());
        });
    }
    
    function btnCity2004(ano) {
        $(".btn_uf").click(function() {
            $("#content_local").html("");
            $("#content_local").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_cargo").html("");
            //$('#content_cargo').append("<div style='margin-bottom: 5px; font-weight: bold;'> Cargo </div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Vereador</div>");
            $("#content_cargo").append("<div class='btn btn_cargo'>Prefeito</div>");
            btnCargo2004(ano, $(this).html());
        });
    }

    function btnCargo2010(ano, local) {
        $(".btn_cargo").click(function() {
            $("#content_cargo").html("");
            $("#content_cargo").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_ok").html("");
            //$('#content_ok').append("<div style='margin-bottom: 5px; font-weight: bold;'> Visualizar </div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/network/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".net'>Rede .net</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/report/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".txt'>Relatórios</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/draw/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".jpg'>Grafo da Rede</a></div>");
        });
    }
    
    function btnCargo2006(ano, local) {
        $(".btn_cargo").click(function() {
            $("#content_cargo").html("");
            $("#content_cargo").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_ok").html("");
            //$('#content_ok').append("<div style='margin-bottom: 5px; font-weight: bold;'> Visualizar </div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/network/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".net'>Rede .net</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/report/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".txt'>Relatórios</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/draw/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".jpg'>Grafo da Rede</a></div>");
        });
    }
    
    function btnCargo2002(ano, local) {
        $(".btn_cargo").click(function() {
            $("#content_cargo").html("");
            $("#content_cargo").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_ok").html("");
            //$('#content_ok').append("<div style='margin-bottom: 5px; font-weight: bold;'> Visualizar </div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/network/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".net'>Rede .net</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/report/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".txt'>Relatórios</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/draw/Network_" + local.trim() + "_" + $(this).html().trim() + "_" + ano.trim() + ".jpg'>Grafo da Rede</a></div>");
        });
    }
    
    function btnCargo2012(ano, local) {
        $(".btn_cargo").click(function() {
            $("#content_cargo").html("");
            $("#content_cargo").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_ok").html("");
            //$('#content_ok').append("<div style='margin-bottom: 5px; font-weight: bold;'> Visualizar </div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/network/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".net'>Rede .net</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/report/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".txt'>Relatórios</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/draw/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".jpg'>Grafo da Rede</a></div>");
        });
    }
  
    function btnCargo2008(ano, local) {
        $(".btn_cargo").click(function() {
            $("#content_cargo").html("");
            $("#content_cargo").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_ok").html("");
            //$('#content_ok').append("<div style='margin-bottom: 5px; font-weight: bold;'> Visualizar </div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/network/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".net'>Rede .net</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/report/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".txt'>Relatórios</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/draw/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".jpg'>Grafo da Rede</a></div>");
        });
    }
    
    function btnCargo2004(ano, local) {
        $(".btn_cargo").click(function() {
            $("#content_cargo").html("");
            $("#content_cargo").append("<div>" + $(this).html() + " >>> </div>");
            $("#content_ok").html("");
            //$('#content_ok').append("<div style='margin-bottom: 5px; font-weight: bold;'> Visualizar </div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/network/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".net'>Rede .net</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/report/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".txt'>Relatórios</a></div>");
            $("#content_ok").append("<div><a class='btn' target='_blank' href='RedesCargoUE_" + ano.trim() + "/draw/Network_" + local.trim() + "-" + $(this).html().trim() + "_" + ano.trim() + ".jpg'>Grafo da Rede</a></div>");
        });
    }
    

    function clear() {
        $('#content_local').html("");
        $('#content_cargo').html("");
        $('#content_ok').html("");
    }

    function newSearch() {
        $("#content_integrantes").hide();
        $("#content").show();
        $("#content_ano").html("");
        //$('#content_ano').append("<div style='margin-bottom: 5px; font-weight: bold;'> Ano </div>");
        $('#content_ano').append("<div id='btn_2002' class='btn'> 2002 </div>");
        $('#content_ano').append("<div id='btn_2004' class='btn'> 2004 </div>");
        $('#content_ano').append("<div id='btn_2006' class='btn'> 2006 </div>");
        $('#content_ano').append("<div id='btn_2008' class='btn'> 2008 </div>");
        $('#content_ano').append("<div id='btn_2010' class='btn'> 2010 </div>");
        $('#content_ano').append("<div id='btn_2012' class='btn'> 2012 </div>");
        clear();
        btnAno();
    }
        
    
    $("#integrantes").click(function() {
        $("#content_integrantes").show();
        $("#content").hide();
    });
    
    
    $("#new").click(function() {
        newSearch();        
    });
    newSearch();
});
