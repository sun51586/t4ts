﻿/****************************************************************************
  Generated by T4TS.tt - don't make any changes in this file
****************************************************************************/

// -- Begin global interfaces
    /** Generated from T4TS.Example.Models.Barfoo **/
    interface Barfoo {
        Number: number;
        Complex: T4TS.OverridenName;
        Name: string;
        DateTime: string;
        aValue: { [name: string]: any};
    }
// -- End global interfaces

declare module External {
    /** Generated from T4TS.Example.Models.ModelFromDifferentProject **/
    export interface ModelFromDifferentProject {
        Id: number;
    }
}

declare module Fooz {
    /** Generated from T4TS.Example.Models.Foobar **/
    export interface IFoobar {
        OverrideAll?: any;
        AGuid: string;
        Recursive: Fooz.IFoobar;
        NullableInt: number;
        NullableDouble: number;
        NestedObjectArr: Barfoo[];
        NestedObjectList: Barfoo[];
        TwoDimensions: string[][];
        ThreeDimensions: Barfoo[][][];
        camelCasePlease: number;
        DoNotIgnoreMe: number;
    }
}

declare module Override {
    /** Generated from T4TS.Tests.Fixtures.Options.Default.DefaultModuleOverrideModel **/
    export interface DefaultModuleOverrideModel {
        SomeProp: string;
    }
}

declare module SomeModule {
    /** Generated from T4TS.Tests.Fixtures.Options.Override.ModuleNameOverrideModel **/
    export interface ModuleNameOverrideModel {
        SomeThirdProp: string;
    }
}

declare module T4TS {
    /** Generated from T4TS.Example.Models.ExtendsExplicit **/
    export interface someEntity extends externalJSModule.Entity {
        Number: number;
        Name: string;
        DateTime: string;
        aValue: { [name: string]: any};
    }
    /** Generated from T4TS.Example.Models.InheritanceTest1 **/
    export interface InheritanceTest1 extends Barfoo {
        SomeString: string;
        Recursive: Fooz.IFoobar;
    }
    /** Generated from T4TS.Example.Models.InheritanceTest2 **/
    export interface InheritanceTest2 extends T4TS.InheritanceTest1 {
        SomeString2: string;
        Recursive2: Fooz.IFoobar;
    }
    /** Generated from T4TS.Example.Models.InheritanceTest3 **/
    export interface InheritanceTest3 extends T4TS.OverridenName {
        SomeString3: string;
        Recursive3: Fooz.IFoobar;
    }
    /** Generated from T4TS.Example.Models.InheritanceTest4 **/
    export interface InheritanceTest4 {
        SomeString4: string;
        Recursive4: Fooz.IFoobar;
    }
    /** Generated from T4TS.Example.Models.InheritanceTestExternal **/
    export interface InheritanceTestExternal extends External.ModelFromDifferentProject {
    }
    /** Generated from T4TS.Example.Models.Inherited **/
    export interface OverridenName {
        OtherName?: string;
        Integers: number[];
        Doubles: number[];
        TwoDimList: number[][];
        [index: number]: Barfoo;
    }
    /** Generated from T4TS.Example.Models.Partial **/
    export interface Partial {
        FromFirstClass: string;
    }
    /** Generated from T4TS.Example.Models.Partial **/
    export interface Partial {
        FromSecondClass: string;
        AlsoSecondClass: boolean;
    }
    /** Generated from T4TS.Tests.Fixtures.Basic.BasicModel **/
    export interface BasicModel {
        MyProperty: number;
        SomeDateTime: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Dictionary.DictionaryModel **/
    export interface DictionaryModel {
        IntKey: { [name: number]: T4TS.BasicModel};
        StringKey: { [name: string]: T4TS.BasicModel};
        [index: number]: T4TS.BasicModel;
    }
    /** Generated from T4TS.Tests.Fixtures.Enumerable.EnumerableModel **/
    export interface EnumerableModel {
        NormalProperty: number;
        PrimitiveArray: number[];
        PrimitiveList: number[];
        InterfaceArray: T4TS.BasicModel[];
        InterfaceList: T4TS.BasicModel[];
        DeepArray: number[][];
        DeepList: number[][];
        Generic: string[];
    }
    /** Generated from T4TS.Tests.Fixtures.ExtendsExplicit.ExtendsExplicitModel **/
    export interface ExtendsExplicitModel extends SomeFooBar {
        Basic: T4TS.BasicModel;
    }
    /** Generated from T4TS.Tests.Fixtures.ExternalProp.ExternalPropModel **/
    export interface ExternalPropModel {
        Basic: T4TS.BasicModel;
        External: External.ModelFromDifferentProject;
    }
    /** Generated from T4TS.Tests.Fixtures.Indexed.IndexedComplexModel **/
    export interface IndexedComplexModel {
        SomeProp: number;
        [index: number]: T4TS.BasicModel;
    }
    /** Generated from T4TS.Tests.Fixtures.Indexed.IndexedPrimitiveModel **/
    export interface IndexedPrimitiveModel {
        SomeProp: number;
        [index: number]: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Inheritance.InheritanceModel **/
    export interface InheritanceModel extends T4TS.OtherInheritanceModel {
        OnInheritanceModel: T4TS.BasicModel;
    }
    /** Generated from T4TS.Tests.Fixtures.Inheritance.OtherInheritanceModel **/
    export interface OtherInheritanceModel extends External.ModelFromDifferentProject {
        OnOtherInheritanceModel: T4TS.BasicModel;
    }
    /** Generated from T4TS.Tests.Fixtures.Nullable.NullableModel **/
    export interface NullableModel {
        NullableInt: number;
        NullableDouble: number;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Default.DefaultCamelCaseMemberNamesModel **/
    export interface DefaultCamelCaseMemberNamesModel {
        SomeProp: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Default.DefaultCamelCaseMemberNamesOverrideModel **/
    export interface DefaultCamelCaseMemberNamesOverrideModel {
        SomeProp: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Default.DefaultInterfaceNamePrefixModel **/
    export interface DefaultInterfaceNamePrefixModel {
        SomeProp: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Default.DefaultInterfaceNamePrefixOverrideModel **/
    export interface PrefixOverrideDefaultInterfaceNamePrefixOverrideModel {
        OverrideName: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Default.DefaultModuleModel **/
    export interface DefaultModuleModel {
        SomeProp: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Default.DefaultOptionalModel **/
    export interface DefaultOptionalModel {
        SomeProp: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Default.DefaultOptionalOverrideModel **/
    export interface DefaultOptionalOverrideModel {
        SomeProp: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Default.UseNativeDatesModel **/
    export interface UseNativeDatesModel {
        SomeDateTime: string;
        SomeDateTimeOffset: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Override.InterfaceNamePrefixModel **/
    export interface FooInterfaceNamePrefixModel {
        SomeProp: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Override.InterfaceNameOverrideModel **/
    export interface Bar {
        SomeOtherProp: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Override.MemberNameOverrideModel **/
    export interface MemberNameOverrideModel {
        OverriddenName: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Override.MemberOptionalModel **/
    export interface MemberOptionalModel {
        Member?: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Override.MemberCamelCaseModel **/
    export interface MemberCamelCaseModel {
        memberName: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Override.MemberTypeModel **/
    export interface MemberTypeModel {
        NotANumber: number;
    }
    /** Generated from T4TS.Tests.Fixtures.Options.Override.MemberIgnoreModel **/
    export interface MemberIgnoreModel {
        NotIgnored: string;
    }
    /** Generated from T4TS.Tests.Fixtures.Partial.PartialModel **/
    export interface PartialModel extends External.ModelFromDifferentProject {
        OnPartialModel: T4TS.BasicModel;
    }
    /** Generated from T4TS.Tests.Fixtures.Partial.PartialModel **/
    export interface PartialModel extends External.ModelFromDifferentProject {
        OnOtherPartialModel: T4TS.BasicModel;
    }
    /** Generated from T4TS.Tests.Traversal.Models.LocalModel **/
    export interface LocalModel {
        Id: number;
        Optional?: string;
    }
    /** Generated from T4TS.Tests.Traversal.Models.ReservedPropModel **/
    export interface ReservedPropModel {
        class: string;
        readonly: string;
        public?: boolean;
    }
}
