import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiAxes} from '@taiga-ui/addon-charts';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';

describe('Axes', () => {
    @Component({
        standalone: true,
        imports: [TuiAxes],
        template: `
            <tui-axes #defaultValues></tui-axes>
            <tui-axes
                #customValues
                [axisXLabels]="axisXLabels"
                [axisYLabels]="axisYLabels"
                [axisYName]="axisYName"
                [axisYSecondaryLabels]="axisYSecondaryLabels"
                [axisYSecondaryName]="axisYSecondaryName"
            ></tui-axes>
        `,
    })
    class Test {
        @ViewChild('defaultValues')
        public readonly defaultValues!: TuiAxes;

        @ViewChild('customValues')
        public readonly customValues!: TuiAxes;

        public axisXLabels = ['Label 1', 'Label 2'];

        public axisYLabels = ['', 'Label 2', 'Label 3'];

        public axisYSecondaryLabels = ['', 'Label 2', 'Label 3'];

        public axisYName = '';

        public axisYSecondaryName = '';
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('axisXLabels', () => {
        it('By default there are no X labels', () => {
            expect(testComponent.defaultValues.hasXLabels).toBe(false);
        });

        it('When axisXLabels is not empty, labels are shown', () => {
            expect(testComponent.customValues.hasXLabels).toBe(true);
        });
    });

    describe('axisYLabels', () => {
        it('By default there are no Y labels', () => {
            expect(testComponent.defaultValues.hasYLabels).toBe(false);
        });

        it('When axisYLabels is not empty, labels are shown', () => {
            expect(testComponent.customValues.hasYLabels).toBe(true);
        });

        it('When axisYLabels is empty, but there is name for the axis, labels section is shown', () => {
            testComponent.axisYLabels = [];
            testComponent.axisYName = 'Test';
            fixture.detectChanges();

            expect(testComponent.customValues.hasYLabels).toBe(true);
        });

        it('Empty labels falls back to non-breaking space', () => {
            expect(testComponent.defaultValues.fallback('')).toBe(CHAR_NO_BREAK_SPACE);
        });
    });

    describe('axisYSecondaryLabels', () => {
        it('By default there are no secondary Y labels', () => {
            expect(testComponent.defaultValues.hasYSecondaryLabels).toBe(false);
        });

        it('When axisYSecondaryLabels is not empty, secondary labels are shown', () => {
            expect(testComponent.customValues.hasYSecondaryLabels).toBe(true);
        });

        it('When axisYSecondaryLabels is empty, but there is name for the secondary axis, secondary labels section is shown', () => {
            testComponent.axisYSecondaryLabels = [];
            testComponent.axisYSecondaryName = 'Test';
            fixture.detectChanges();

            expect(testComponent.customValues.hasYSecondaryLabels).toBe(true);
        });
    });
});
