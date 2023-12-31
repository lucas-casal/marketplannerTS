const notFound = (resource = "Item") => {
    return {
        type: "notFound",
        message: `${resource} não foi encontrado(a)`
    }
}

const conflict = (resource = "Item") => {
    return {
        type: "conflict",
        message: `${resource} digitado já existe`
    }
}

const invalidLength = (resource: string, rule: string, a=0, b=0) => {
    let message;
    switch(rule){
        case "more":
            message = `${resource} deve ter, pelo menos, ${a} caracteres!`;
            break
        case "less":
            message = `${resource} deve ter, no máximo, ${a} caracteres!`;
            break
        case "between":
            message = `${resource} deve ter de ${a} a ${b} caracteres!`;
            break
    }

    return {
        type: "invalidData",
        message
    }
}

const invalidOrigDest = (rule: string) => {
    let message: string;
    switch(rule){
        case "Origem":
            message = "Origem digitada é inválida!";
            break
        case "Destino":
            message = "Destino digitado é inválido!";
            break
        case "Origem e destino":
            message = "Origem e destino digitados são inválidos!";
            break
        case "Iguais":
            message = "Origem e destino digitados são iguais, mas deveriam ser diferentes!";
            break
        
        default: 
            message=''
            break
    }

    return {
        type: "invalidData",
        message
    }
}

const invalidDate = () => {
    return {
        type: "invalidData",
        message: "A data digitada já passou. Só é permitido registrar voos que ocorram de hoje em diante."
    }
}

const invalidBigSmall = (resource: string) => {
    let message: string = '';
    let type: string = '';
    switch (resource){
        case 'tamanho':
            type = 'badreq'
            message = "A maior data selecionada deve ser maior do que a menor data selecionada!";
            break;
        case 'falta':
            type = "invalidData"
            message = "Só foi enviado 1 dos parâmetros que devem ser enviados!"
    } 
    return {
        type,
        message
    }
}

const toomany = () => {
    return {
        type: "tooMany",
        message: "Too many results"
    }
}

const invalidPage = () => {
    return {
        type: "badreq",
        message: "Invalid page value"
    }
}

const invalidDataError = (ref: string) => {
    return {
        type: "badreq",
        message: ref
    }
}
export const errors = {notFound, conflict, invalidLength, invalidOrigDest, invalidDate, invalidBigSmall, toomany, invalidPage, invalidDataError}