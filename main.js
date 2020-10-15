console.log(cb_obj.value, "got selected");

source_d.data["dates"] = df_dict_d["dates"];
source_t.data["dates"] = df_dict_t["dates"];

source_d.data["selected"] = df_dict_d[cb_obj.value];
source_t.data["selected"] = df_dict_t[cb_obj.value];

source_d.change.emit();
source_t.change.emit();
