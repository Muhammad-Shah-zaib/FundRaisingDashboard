import {
    addCaseUrl,
    deleteCaseUrl,
    getALLCasesUrl,
    unVerifyCaseUrl,
    updateCaseUrl,
    verifyCaseUrl
} from "@/environment/serverUrls";
import ICaseRequestDto from "@/models/DTOs/CaseRequestDto";
import { CaseList } from "@/models/DTOs/CasesResponseDto";
import { delay, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

export const addCaseAsync = (data: ICaseRequestDto) => {
    return ajax.post(addCaseUrl, data)
        .pipe(
            delay(200),
            tap((res) => {
                if (res.status === 403) throw new Error("Un-Authorized");
            }),
        )
}


export const deleteCaseAsync = (id: number) => {
    return ajax.delete(deleteCaseUrl + id)
        .pipe(
            delay(200),
            tap((res) => {
                if (res.status === 403) throw new Error("Un-Authorized");
            }),

        );
}

export const updateCase$ = (id: number, data: ICaseRequestDto) => {
    return ajax.put(updateCaseUrl + id, data)
        .pipe(
            delay(200),
            tap((res) => {
                if (res.status === 403) throw new Error("UnAutorized");
            }),
        );
}

export const getAllCases$ = () => {
    return ajax.getJSON<CaseList>(getALLCasesUrl)
        .pipe(
            delay(200),
        );
}
export const verifyCase$ = (id: number) => {
    return ajax.put(`${verifyCaseUrl}/${id}`)
        .pipe(
            tap(res => {
                if (res.status === 403) throw new Error("UnAuthorized access");
            })
        );
}
export const unVerifyCase$ = (id: number) => {
    return ajax.put(`${unVerifyCaseUrl}/${id}`)
        .pipe(
            tap( res => {
                if (res.status === 403) throw new Error("UnAuthorized access");
            })
        );
}




