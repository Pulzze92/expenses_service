export const InputLabels: Record<string, string> = {
    "well_num": "Номер скважины",
    "profile": "Профиль",
    "date": "Дата",
    "column_d": "D колонны",
    "operation_object": "Объект эксплуатации",
}

export const ButtonLabels: Record<string, string> = {
    "add_well": "Добавить скважину",
    "count": "Рассчитать",
    "file": "Файл",
}

export const ResultTableLabels: Record<string, string> = {
    "order_num": "№ пп",
    "well_num": "№ скв.",
    "profile": "Профиль",
    "date": "Дата",
    "D_col": "⌀ колонны",
    "operation_object": "Объект эксплуатации",
    "operational_shank": "Эксплуатационный хвостовик",
    "cement_adhesion_quality": "Качество сцепления цемента с колонной, % от оцениваемого интервала",
    "hard": "Жесткий",
    "partial": "Частичный",
    "absent": "Отсутствует",
    "cement_filling_quality": "Качество заполнения цемента, % от оцениваемого интервала",
    "homogeneous": "Однородное",
    "unilateral": "Одностороннее",
    "contact_quality_factor": "Коэффициент качества контакта",
    "filling_quality_factor": "Коэффициент качества заполнения",
    "cementing_quality": "Качество цементирования",
    "price1": "у.е",
    "price2": "у.е",
    "price3": "у.е",
    "delete": "Удалить",
}

export const ResultTableLabelsRows: Record<string, Record<string, number | string>> = {
    firstRow: {
        "order_num": {
            "rowspan": 3,
        },
        "well_num": {
            "rowspan": 3,
        },
        "profile": {
            "rowspan": 3,
        },
        "date": {
            "rowspan": 3,
        },
        "D_col": {
            "rowspan": 3,
        },
        "operation_object": {
            "rowspan": 3,
        },
        "operational_shank": {
            "colspan": 8,
        },
    },
    secondRow: {
        "cement_adhesion_quality": {
            "colspan": 3,
        },
        "cement_filling_quality": {
            "colspan": 2,
        },
        "contact_quality_factor": "no",
        "filling_quality_factor": "no",
        "cementing_quality": "no",
    },
    thirdRow: {
        "hard": "no",
        "partial": "no",
        "absent": "no",
        "homogeneous": "no",
        "unilateral": "no",
        "price1": "no",
        "price2": "no",
        "price3": "no",
    },
}
