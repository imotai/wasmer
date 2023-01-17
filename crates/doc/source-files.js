var sourcesIndex = JSON.parse('{\
"compiler_test_derive":["",[],["ignores.rs","lib.rs"]],\
"macro_wasmer_universal_test":["",[],["lib.rs"]],\
"test_generator":["",[],["lib.rs","processors.rs"]],\
"wasi_test_generator":["",[],["main.rs","set_up_toolchain.rs","util.rs","wasi_version.rs","wasitests.rs"]],\
"wasmer":["",[["sys",[["externals",[],["function.rs","global.rs","memory.rs","memory_view.rs","mod.rs","table.rs"]]],["exports.rs","extern_ref.rs","function_env.rs","imports.rs","instance.rs","mem_access.rs","mod.rs","module.rs","native.rs","native_type.rs","ptr.rs","store.rs","tunables.rs","value.rs"]]],["into_bytes.rs","lib.rs"]],\
"wasmer_c_api":["",[["wasm_c_api",[["externals",[],["function.rs","global.rs","memory.rs","mod.rs","table.rs"]],["types",[],["export.rs","extern_.rs","frame.rs","function.rs","global.rs","import.rs","memory.rs","mod.rs","mutability.rs","table.rs","value.rs"]],["unstable",[["middlewares",[],["metering.rs","mod.rs"]],["parser",[],["mod.rs","operator.rs"]]],["engine.rs","features.rs","mod.rs","module.rs","target_lexicon.rs","wasi.rs"]],["wasi",[],["mod.rs"]]],["engine.rs","function_env.rs","instance.rs","macros.rs","mod.rs","module.rs","store.rs","trap.rs","value.rs","version.rs","wat.rs"]]],["error.rs","lib.rs"]],\
"wasmer_c_api_test_runner":["",[],["lib.rs"]],\
"wasmer_cache":["",[],["cache.rs","filesystem.rs","hash.rs","lib.rs"]],\
"wasmer_capi_examples_runner":["",[],["lib.rs"]],\
"wasmer_cli":["",[["c_gen",[],["mod.rs","staticlib_header.rs"]],["commands",[["run",[],["wasi.rs"]]],["add.rs","binfmt.rs","cache.rs","compile.rs","config.rs","create_exe.rs","create_obj.rs","gen_c_header.rs","init.rs","inspect.rs","list.rs","login.rs","publish.rs","run.rs","self_update.rs","validate.rs","wast.rs","whoami.rs"]]],["cli.rs","commands.rs","common.rs","error.rs","lib.rs","package_source.rs","store.rs","suggestions.rs","utils.rs"]],\
"wasmer_compiler":["",[["artifact_builders",[],["artifact_builder.rs","mod.rs","trampoline.rs"]],["engine",[["trap",[],["error.rs","frame_info.rs","mod.rs"]],["unwind",[],["mod.rs","systemv.rs"]]],["artifact.rs","builder.rs","code_memory.rs","engineref.rs","error.rs","inner.rs","link.rs","mod.rs","resolver.rs","tunables.rs"]],["translator",[],["environ.rs","error.rs","middleware.rs","mod.rs","module.rs","sections.rs","state.rs"]]],["compiler.rs","lib.rs","traits.rs"]],\
"wasmer_compiler_cli":["",[["commands",[],["compile.rs","config.rs","validate.rs"]]],["cli.rs","commands.rs","common.rs","error.rs","lib.rs","store.rs","utils.rs"]],\
"wasmer_compiler_cranelift":["",[["debug",[],["address_map.rs","mod.rs"]],["trampoline",[],["dynamic_function.rs","function_call.rs","mod.rs"]],["translator",[],["code_translator.rs","func_environ.rs","func_state.rs","func_translator.rs","mod.rs","translation_utils.rs","unwind.rs"]]],["address_map.rs","compiler.rs","config.rs","dwarf.rs","func_environ.rs","lib.rs"]],\
"wasmer_compiler_llvm":["",[["abi",[],["aarch64_systemv.rs","mod.rs","x86_64_systemv.rs"]],["trampoline",[],["mod.rs","wasm.rs"]],["translator",[],["code.rs","intrinsics.rs","mod.rs","state.rs"]]],["compiler.rs","config.rs","lib.rs","object_file.rs"]],\
"wasmer_compiler_singlepass":["",[],["address_map.rs","arm64_decl.rs","codegen.rs","common_decl.rs","compiler.rs","config.rs","dwarf.rs","emitter_arm64.rs","emitter_x64.rs","lib.rs","location.rs","machine.rs","machine_arm64.rs","machine_x64.rs","unwind.rs","unwind_winx64.rs","x64_decl.rs"]],\
"wasmer_derive":["",[],["lib.rs","value_type.rs"]],\
"wasmer_emscripten":["",[["env",[["unix",[],["mod.rs"]]],["mod.rs"]],["io",[],["mod.rs","unix.rs"]],["syscalls",[],["mod.rs","unix.rs"]]],["bitwise.rs","emscripten_target.rs","errno.rs","exception.rs","exec.rs","exit.rs","inet.rs","jmp.rs","lib.rs","libc.rs","linking.rs","lock.rs","macros.rs","math.rs","memory.rs","process.rs","pthread.rs","signal.rs","storage.rs","time.rs","ucontext.rs","unistd.rs","utils.rs","varargs.rs"]],\
"wasmer_integration_tests_cli":["",[],["assets.rs","lib.rs","link_code.rs","util.rs"]],\
"wasmer_middlewares":["",[],["lib.rs","metering.rs"]],\
"wasmer_object":["",[],["error.rs","lib.rs","module.rs"]],\
"wasmer_registry":["",[],["config.rs","graphql.rs","interface.rs","lib.rs","login.rs","package.rs","publish.rs","queries.rs","utils.rs"]],\
"wasmer_types":["",[["compilation",[],["address_map.rs","function.rs","mod.rs","module.rs","relocation.rs","section.rs","sourceloc.rs","symbols.rs","target.rs","trap.rs","unwind.rs"]],["entity",[],["boxed_slice.rs","iter.rs","keys.rs","mod.rs","packed_option.rs","primary_map.rs","secondary_map.rs"]]],["error.rs","features.rs","indexes.rs","initializers.rs","lib.rs","libcalls.rs","memory.rs","module.rs","serialize.rs","table.rs","trapcode.rs","types.rs","units.rs","utils.rs","value.rs","vmoffsets.rs"]],\
"wasmer_vbus":["",[],["lib.rs"]],\
"wasmer_vfs":["",[["mem_fs",[],["file.rs","file_opener.rs","filesystem.rs","mod.rs","stdio.rs"]]],["host_fs.rs","lib.rs","static_fs.rs","webc_fs.rs"]],\
"wasmer_vm":["",[["instance",[],["allocator.rs","mod.rs"]],["trap",[],["mod.rs","trap.rs","traphandlers.rs"]]],["export.rs","extern_ref.rs","function_env.rs","global.rs","imports.rs","lib.rs","libcalls.rs","memory.rs","mmap.rs","probestack.rs","sig_registry.rs","store.rs","table.rs","vmcontext.rs"]],\
"wasmer_vnet":["",[],["lib.rs"]],\
"wasmer_wasi":["",[["runners",[],["emscripten.rs","mod.rs","wasi.rs"]],["state",[],["builder.rs","guard.rs","mod.rs","pipe.rs","socket.rs","types.rs"]],["syscalls",[["legacy",[],["mod.rs","snapshot0.rs"]],["unix",[],["mod.rs"]]],["mod.rs","wasix32.rs","wasix64.rs"]]],["lib.rs","macros.rs","runtime.rs","utils.rs"]],\
"wasmer_wasi_experimental_io_devices":["",[],["lib.rs"]],\
"wasmer_wasi_local_networking":["",[],["lib.rs"]],\
"wasmer_wasi_types":["",[["wasi",[],["extra.rs","extra_manual.rs","mod.rs"]]],["lib.rs","types.rs"]],\
"wasmer_wasm_interface":["",[],["interface.rs","interface_matcher.rs","lib.rs","parser.rs","validate.rs"]],\
"wasmer_wast":["",[],["error.rs","lib.rs","spectest.rs","wasi_wast.rs","wast.rs"]]\
}');
createSourceSidebar();
