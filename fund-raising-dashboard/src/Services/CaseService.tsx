import { addCaseUrl, deleteCaseUrl, getALLCasesUrl, updateCaseUrl } from "@/environment/serverUrls";
import ICaseRequestDto from "@/models/DTOs/CaseRequestDto";
import { CaseList } from "@/models/DTOs/CasesResponseDto";
import { catchError, delay, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

export const addCaseAsync = (data: ICaseRequestDto) => {
    return ajax.post(addCaseUrl, data)
        .pipe(
            delay(200),
            tap((res) => {
                if (res.status === 403) throw new Error("UnAutorized");
            }),
            catchError((err) => {
                throw new Error(err);
            })
        )
}

export const deleteCaseAsync = (id: number) => {
    return ajax.delete(deleteCaseUrl + id)
        .pipe(
            delay(200),
            tap((res) => {
                if (res.status === 403) throw new Error("UnAutorized");
            }),
            catchError((err) => {
                throw new Error(err);
            })
        );
}

export const updateCase$ = (id: number, data: ICaseRequestDto) => {
    return ajax.put(updateCaseUrl + id, data)
        .pipe(
            delay(200),
            tap((res) => {
                if (res.status === 403) throw new Error("UnAutorized");
            }),
            catchError((err) => {
                throw new Error(err);
            })
        );
}

export const getAllCases$ = () => {
    return ajax.getJSON<CaseList>(getALLCasesUrl)
        .pipe(
            delay(200),
        );
}